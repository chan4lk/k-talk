using System;

namespace Workflow.Business
{
    public class DealerConversionWorkflow : IWorkflow
    {
        #region Private Fields - Instance Member

        private readonly EnrollmentForm form;

        private UserRole role;

        private WorkflowState state;
 
        #endregion

        #region Public Methods - Instance Member

        public DealerConversionWorkflow(IRoleManager roleManager, EnrollmentForm form)
        {
            ValidateParams(form);

            this.form = form;
            this.role = roleManager.GetRole();
            this.state = WorkflowState.None;
        }

        public WorkflowStateResponse GetNextState()
        {
            if (IsApproved())
                HandleApprovedForm();
            else if (IsReturned())
                HandleReturnedForm();
            else if (IsRejected())
                HandleRejectedForm();

            return new WorkflowStateResponse { WorkflowState = state };
        }

        #endregion

        #region Private Methods - Instance Member

        private void HandleReturnedForm()
        {
            if (IsProgramManager())
                state = WorkflowState.PMReturned;
            else if (IsSalesManager())
                state = WorkflowState.SMReturned;
        }

        private void HandleApprovedForm()
        {
            if (IsProgramManager())
                state = WorkflowState.PMApproved;
            else if (IsSalesManager())
                state = WorkflowState.SMApproved;
            else if (IsDistributor())
                state = WorkflowState.DistributorSubmitted;
        }

        private void HandleRejectedForm()
        {
            if (IsProgramManager())
                state = WorkflowState.PMRejected;
            else if (IsSalesManager())
                state = WorkflowState.SMRejected;
        }

        private bool IsApproved()
        {
            return form.WorkflowAction == WorkflowAction.Approved;
        }

        private bool IsRejected()
        {
            return form.WorkflowAction == WorkflowAction.Rejected;
        }

        private bool IsReturned()
        {
            return form.WorkflowAction == WorkflowAction.Returned;
        }

        private void ValidateParams(params object[] args)
        {
            foreach (var arg in args)
            {
                if (null == arg)
                    throw new ArgumentNullException(args.GetType().Name, "Workflow parameters are null");
            }
        }

        private bool IsSalesManager()
        {
            return role == UserRole.SalesManager;
        }

        private bool IsProgramManager()
        {
            return role == UserRole.ProgramManager;
        }

        private bool IsDistributor()
        {
            return role == UserRole.Distributor;
        } 
        #endregion

    }
}
