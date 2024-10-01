using System;
using System.Linq;
using MVC5RealWorld.Models.BD;
using MVC5RealWorld.Models.ViewModel;
namespace MVC5RealWorld.Models.EntityManager
{
    public class UserManager
    {
        public void AddUserAccount(UserSignUpView user)
        {
            using (DemoDBEntities1 db = new DemoDBEntities1())
            {
                SYSUser SU = new SYSUser();
                SU.LoginName = user.LoginName;
                SU.PasswordEncryptedText = user.Password;
                SU.RowCreatedSYSUserID = user.SYSUserID > 0 ? user.SYSUserID : 1;
                SU.RowModifiedSYSUserID = user.SYSUserID > 0 ? user.SYSUserID : 1; ;
                SU.RowCreatedDateTime = DateTime.Now;
                SU.RowModifiedDateTime = DateTime.Now;
                db.SYSUser.Add(SU);
                db.SaveChanges();

                SYSUserProfile SUP = new SYSUserProfile();
                SUP.SYSUserID = SU.SYSUserID;
                SUP.FirstName = user.FirstName;
                SUP.LastName = user.LastName;
                SUP.Gender = user.Gender;
                SUP.RowCreatedSYSUserID = user.SYSUserID > 0 ? user.SYSUserID : 1;
                SUP.RowModifiedSYSUserID = user.SYSUserID > 0 ? user.SYSUserID : 1;
                SUP.RowCreatedDateTime = DateTime.Now;
                SUP.RowModifiedDateTime = DateTime.Now;
                db.SYSUserProfile.Add(SUP);
                db.SaveChanges();

                if (user.LOOKUPRoleID > 0)
                {
                    SYSUserRole SUR = new SYSUserRole();
                    SUR.LOOKUPRoleID = user.LOOKUPRoleID;
                    SUR.SYSUserID = user.SYSUserID;
                    SUR.IsActive = true;
                    SUR.RowCreatedSYSUserID = user.SYSUserID > 0 ? user.SYSUserID : 1;
                    SUR.RowModifiedSYSUserID = user.SYSUserID > 0 ? user.SYSUserID : 1;
                    SUR.RowCreatedDateTime = DateTime.Now;
                    SUR.RowModifiedDateTime = DateTime.Now;
                    db.SYSUserRole.Add(SUR);
                    db.SaveChanges();
                }
            }
        }
        public bool IsLoginNameExist(string loginName)
        {
            using (DemoDBEntities1 db = new DemoDBEntities1()){    
                return db.SYSUser.Where(o => o.LoginName.Equals(loginName)).Any();
            }
        }
        public bool ValidateUser(string loginName, string password)
        {
            using (DemoDBEntities1 db = new DemoDBEntities1())
            {
                // Buscar el usuario en la base de datos
                var user = db.SYSUser.SingleOrDefault(u => u.LoginName.Equals(loginName));

                if (user == null)
                {
                    return false; // Usuario no encontrado
                }

                // Comparar la contraseña almacenada con la ingresada
                return user.PasswordEncryptedText == password; // Comparación directa
            }
        }

    }
}