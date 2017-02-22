using NUnit.Framework;
using System;
using Workflow.Business;
using FluentAssertions;
using Microsoft.QualityTools.Testing.Fakes;
using Microsoft.SharePoint.Fakes;
using Moq;

namespace Workflow.Tests
{
    [TestFixture]
    public class WorkflowTests
    {
        BusinessService service;        
        Func<UserRole> roleManager;

        [TestFixtureSetUp]
        public void Setup()
        {           
            service = new BusinessService();
        }

        [Test]
        public void GivenNullFormShouldThrowException()
        {
            using (ShimsContext.Create())
            {
                SetupSPContext(UserRole.ProgramManager.ToString());
                Assert.Throws<ArgumentNullException>(() => service.GetWorkflowState(Helper.GetRole, null));
            }
        }

        [TestCase(UserRole.ProgramManager, WorkflowAction.Approved, WorkflowState.PMApproved, TestName = "Given PM Approved should return active")]
        [TestCase(UserRole.ProgramManager, WorkflowAction.Returned, WorkflowState.PMReturned, TestName = "Given PM Returned should return PMReturned")]
        [TestCase(UserRole.ProgramManager, WorkflowAction.Rejected, WorkflowState.PMRejected, TestName = "Given PM Rejected should return PMRejected")]
        [TestCase(UserRole.SalesManager, WorkflowAction.Approved, WorkflowState.SMApproved, TestName = "Given SM Approved should return SMApproved")]
        [TestCase(UserRole.SalesManager, WorkflowAction.Returned, WorkflowState.SMReturned, TestName = "Given SM Returned should return SMReturned")]
        [TestCase(UserRole.SalesManager, WorkflowAction.Rejected, WorkflowState.SMRejected, TestName = "Given SM Rejected should return SMRejected")]
        [TestCase(UserRole.Distributor, WorkflowAction.Approved, WorkflowState.DistributorSubmitted, TestName = "Given Distributor Submitted should return DistributorSubmitted.")]
        public void GivenActionShoudReturnState(UserRole role, WorkflowAction action, WorkflowState state)
        {
            using (ShimsContext.Create())
            {
                roleManager = () => role;                
                WorkflowStateResponse response = service.GetWorkflowState(roleManager, new EnrollmentForm { WorkflowAction = action });
                response.WorkflowState.ShouldBeEquivalentTo(state);
            }
        }

        private void SetupSPContext(string role)
        {
            ShimSPContext.CurrentGet = () =>
            {
                return new ShimSPContext()
                {
                    SiteGet = () =>
                        {
                            return new ShimSPSite()
                            {
                                UrlGet = () =>
                                    {
                                        return "http://blackjack/" + role;
                                    }
                            };
                        }
                };
            };
        }
    }
}
