using System;
using WorkflowDemo.Entities;

namespace WorkflowDemo.Services
{
    public class BusinessService
    {
        public WorkflowState GetWorkflowState(EnrollmentForm form)
        {
            if (null == form)
                throw new ArgumentNullException("form");

            WorkflowState next = form.State;
            UserRole role = Helper.GetRole();

            if (form.Action == UserAction.Approved) // when approved
            {
                if (role == UserRole.SalesManager)
                    next = WorkflowState.SMApproved;
                else if (role == UserRole.ProgramManager)
                    next = WorkflowState.PMApproved;
                else if (role == UserRole.Distributor)
                    next = WorkflowState.DistributorSubmitted;
            }

            else if (form.Action == UserAction.Returned) // when returned
            {
                if (role == UserRole.ProgramManager)
                    next = WorkflowState.PMReturned;
                else if (role == UserRole.SalesManager)
                    next = WorkflowState.SMReturned;
            }

            else if (form.Action == UserAction.Rejected) // when rejected
            {
                if (role == UserRole.ProgramManager)
                    next = WorkflowState.PMRejected;
                else if (role == UserRole.SalesManager)
                    next = WorkflowState.SMRejected;
            }

            return next;
        }
    }
}
