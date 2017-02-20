using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Workflow.Business
{
    public enum WorkflowState
    {
        None,
        PMApproved,
        PMReturned,
        PMRejected,
        SMApproved,
        SMReturned,
        SMRejected,
        DistributorSubmitted
    }
}
