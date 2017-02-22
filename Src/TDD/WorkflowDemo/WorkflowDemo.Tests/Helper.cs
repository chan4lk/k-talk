using Microsoft.SharePoint;
using WorkflowDemo.Entities;

namespace WorkflowDemo
{
    public class Helper
    {
        public static UserRole GetRole()
        {
            var url = SPContext.Current.Site.Url;

            if (url.Contains("ProgramManager"))
                return UserRole.ProgramManager;
            else if (url.Contains("SalesManager"))
                return UserRole.SalesManager;
            else
                return UserRole.Distributor;
        }
    }
}
