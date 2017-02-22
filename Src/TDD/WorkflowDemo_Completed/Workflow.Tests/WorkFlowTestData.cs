using NUnit.Framework;
using System.Collections.Generic;
using Workflow.Business;

namespace Workflow.Tests
{
    public class WorkFlowTestData
    {
        private IEnumerable<TestCaseData> WorkflowData
        {
            get
            {
                yield return new TestCaseData(
                    UserRole.ProgramManager,
                    WorkflowAction.Approved,
                    WorkflowState.PMApproved)
                .SetName("Given PM Approved should return active");

                yield return new TestCaseData(
                  UserRole.ProgramManager,
                  WorkflowAction.Returned,
                  WorkflowState.PMReturned)
                .SetName("Given PM Returned should return PMReturned");

                yield return new TestCaseData(
                    UserRole.ProgramManager,
                    WorkflowAction.Rejected,
                    WorkflowState.PMRejected)
                .SetName("Given PM Rejected should return PMRejected");

                yield return new TestCaseData(
                    UserRole.SalesManager,
                    WorkflowAction.Approved,
                    WorkflowState.SMApproved)
                .SetName("Given SM Approved should return SMApproved");


                yield return new TestCaseData(
                    UserRole.SalesManager,
                    WorkflowAction.Returned,
                    WorkflowState.SMReturned)
                .SetName("Given SM Returned should return SMReturned");

                yield return new TestCaseData(
                    UserRole.SalesManager,
                    WorkflowAction.Rejected,
                    WorkflowState.SMRejected)
                .SetName("Given SM Rejected should return SMRejected");

                yield return new TestCaseData(
                    UserRole.Distributor,
                    WorkflowAction.Approved,
                    WorkflowState.DistributorSubmitted)
               .SetName("Given Distributor Submitted should return DistributorSubmitted.");

            }
        }
    }
}
