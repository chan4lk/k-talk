using System;
namespace Workflow.Business
{
    public interface IWorkflowFactory
    {
       IWorkflow GetDealerWorkflow(EnrollmentForm form);
    }
}
