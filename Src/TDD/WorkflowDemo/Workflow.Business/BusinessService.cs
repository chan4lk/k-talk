using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Workflow.Business
{
    public class BusinessService
    {
        public WorkflowStateResponse GetWorkflowState(Func<UserRole> getRole, EnrollmentForm form)
        {
            UserRole role = getRole();

            WorkflowState state = WorkflowState.None;

            if(null == form)
                throw new ArgumentNullException("form");

            if (form.WorkflowAction == WorkflowAction.Approved)
            {
                if (role == UserRole.ProgramManager)
                    state = WorkflowState.PMApproved;
                else if (role == UserRole.SalesManager)
                    state = WorkflowState.SMApproved;
                else if (role == UserRole.Distributor)
                    state = WorkflowState.DistributorSubmitted;
            }
            else if (form.WorkflowAction == WorkflowAction.Returned)
            {
                if (role == UserRole.ProgramManager)
                    state = WorkflowState.PMReturned;
                else if (role == UserRole.SalesManager)
                    state = WorkflowState.SMReturned;
            }
            else if (form.WorkflowAction == WorkflowAction.Rejected)
            {
                if (role == UserRole.ProgramManager)
                    state = WorkflowState.PMRejected;
                else if (role == UserRole.SalesManager)
                    state = WorkflowState.SMRejected;
            }

            return new WorkflowStateResponse { WorkflowState = state };
        }
    }
}
