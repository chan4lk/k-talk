using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Workflow.Business
{
    public class BusinessService
    {
        public WorkflowStateResponse GetWorkflowState(IWorkflowFactory factory, EnrollmentForm form)
        {
            IWorkflow workflow = factory.GetDealerWorkflow(form);
            return workflow.GetNextState();
        }
    }    
}
