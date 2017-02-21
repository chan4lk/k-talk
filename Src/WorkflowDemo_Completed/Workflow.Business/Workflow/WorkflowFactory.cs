using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Workflow.Business.Workflow
{
    public class WorkflowFactory : IWorkflowFactory
    {
        public IWorkflow GetDealerWorkflow(EnrollmentForm form)
        {
            return new DealerConversionWorkflow(new Helper(), form);
        }
    }
}
