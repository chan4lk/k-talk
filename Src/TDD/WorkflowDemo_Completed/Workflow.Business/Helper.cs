using Microsoft.SharePoint;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Workflow.Business
{
    public class Helper : IRoleManager
    {
        public UserRole GetRole()
        {
            var url = SPContext.Current.Site.Url;

            if (url.Contains("ProgramManager")) 
                return UserRole.ProgramManager;
            else if (url.Contains("SalesManager"))
                return UserRole.SalesManager ;
            else 
                return UserRole.Distributor;
        }
    }
}
