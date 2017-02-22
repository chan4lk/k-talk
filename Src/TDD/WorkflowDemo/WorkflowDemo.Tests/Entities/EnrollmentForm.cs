using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WorkflowDemo.Entities
{
    public class EnrollmentForm
    {
        public WorkflowState State { get; set; }

        public UserAction Action { get; set; }
    }
}
