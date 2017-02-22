using System;
namespace Workflow.Business
{
    public interface IWorkflow
    {
        WorkflowStateResponse GetNextState();
    }
}
