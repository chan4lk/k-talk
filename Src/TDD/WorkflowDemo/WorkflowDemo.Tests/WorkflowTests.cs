using FluentAssertions;
using Microsoft.QualityTools.Testing.Fakes;
using Microsoft.SharePoint.Fakes;
using NUnit.Framework;
using System;
using WorkflowDemo.Entities;
using WorkflowDemo.Services;

namespace WorkflowDemo.Tests
{

    [TestFixture]
    public class WorkflowTests
    {
        BusinessService service;

        [SetUp]
        public void Setup()
        {
            service = new BusinessService();
        }

        [Test]
        public void GivenEmptyObjectShouldThrow()
        {
            Assert.Throws<ArgumentNullException>(() => service.GetWorkflowState(null));
        }


        [TestCase(UserRole.ProgramManager, UserAction.Approved, WorkflowState.PMApproved, TestName = "Given PM Approved Should Return PMApproved")]
        [TestCase(UserRole.ProgramManager, UserAction.Returned, WorkflowState.PMReturned, TestName = "Given PM Rejected Should Return PMReturned")]
        [TestCase(UserRole.ProgramManager, UserAction.Rejected, WorkflowState.PMRejected, TestName = "Given PM Rejected Should Return PMRejected")]
        [TestCase(UserRole.SalesManager, UserAction.Approved, WorkflowState.SMApproved, TestName = "Given SM Approved Should Return SMApproved")]
        [TestCase(UserRole.SalesManager, UserAction.Returned, WorkflowState.SMReturned, TestName = "Given SM Retunred Should Return SMReturned")]
        [TestCase(UserRole.SalesManager, UserAction.Rejected, WorkflowState.SMRejected, TestName = "Given SM Rejected Should Return SMRejected")]
        [TestCase(UserRole.Distributor, UserAction.Approved, WorkflowState.DistributorSubmitted, TestName = "Given Distributor Submitted Should Return DistributorSubmitted")]
        public void GivenActionShouldUpdateState(
            UserRole role,
            UserAction action, 
            WorkflowState nextState)
        {
            using (ShimsContext.Create())
            {
                //Arrage
                var form = new EnrollmentForm()
                {
                    State = WorkflowState.None,
                    Action = action
                };

                SetupContext(role);

                //Act
                WorkflowState actualState = service.GetWorkflowState(form);

                //Assert
                actualState.ShouldBeEquivalentTo(nextState);
            }
        }

        private void SetupContext(UserRole role)
        {
            ShimSPContext.CurrentGet = () =>
            {
                return new ShimSPContext()
                {
                    SiteGet = () =>
                        {
                            return new ShimSPSite()
                            {
                                UrlGet = () => "http://localhost/User/" + role.ToString()
                            };
                        }
                };
            };
        }
		
    }
			
}
