using NUnit.Framework;
using System;
using Workflow.Business;
using FluentAssertions;
using Microsoft.QualityTools.Testing.Fakes;
using Microsoft.SharePoint.Fakes;
using Moq;
using System.Collections;
using System.Collections.Generic;
using Workflow.Business.Workflow;

namespace Workflow.Tests
{
    [TestFixture]
    public class WorkflowTests
    {
        BusinessService service;
        IRoleManager roleManager;
        IWorkflowFactory workflowFactory;

        [TestFixtureSetUp]
        public void Setup()
        {
            service = new BusinessService();
        }

        [Test]
        [Category("Workflow Tests")]
        public void GivenNullFormShouldThrowException()
        {
            using (ShimsContext.Create())
            {
                SetupSPContext(UserRole.ProgramManager);
                Assert.Throws<ArgumentNullException>(() => service.GetWorkflowState(new WorkflowFactory(), null));
            }
        }   


     
        [Category("Workflow Tests")]
        [TestCaseSource(typeof(WorkFlowTestData),"WorkflowData")]
        public void GivenActionShoudReturnState(UserRole role, WorkflowAction action, WorkflowState expectedState)
        {           
                SetupRoleManager(role);
                WorkflowStateResponse response =
                    service.GetWorkflowState(workflowFactory, new EnrollmentForm { WorkflowAction = action });
                response.WorkflowState.ShouldBeEquivalentTo(expectedState);            
        }

        private void SetupRoleManager(UserRole role)
        {
            Mock<IRoleManager> mockRoleManager = new Mock<IRoleManager>();
            roleManager = mockRoleManager.Object;
            mockRoleManager.Setup(x => x.GetRole()).Returns(role);

            Mock<IWorkflowFactory> mockFactory = new Mock<IWorkflowFactory>();
            workflowFactory = mockFactory.Object;
            mockFactory.Setup(x=> x.GetDealerWorkflow(It.IsAny<EnrollmentForm>())).Returns((EnrollmentForm form) => new DealerConversionWorkflow(roleManager, form));
                
        }

        private void SetupSPContext(UserRole role)
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
                                        return "http://blackjack/" + role.ToString();
                                    }
                            };
                        }
                };
            };
        }
                
    }
}
