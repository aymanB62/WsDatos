using crudDesdeCero.Models.DB;
using crudDesdeCero.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Linq;

namespace crudDesdeCero.Models.EntityManager
{
    public class crudManager
    {
        public List<bookView> ListBooks()
        {
            List<bookView> booksList = new List<bookView>();


            using (crudDesdeCeroEntities db = new crudDesdeCeroEntities())
            {
                booksList = db.book.Select(b => new bookView
                {
                    id = b.Id,
                    Name = b.Name,
                    Author = b.Author,
                    ISBN = b.ISBN
                }).ToList();
            }

            return booksList;
        }

        public void addBook(bookView BV)
        {
            using (crudDesdeCeroEntities db = new crudDesdeCeroEntities())
            {
                book bo= new book();
                bo.Id = BV.id;
                bo.Name = BV.Name;
                bo.Author = BV.Author;
                bo.ISBN = BV.ISBN;
                db.book.Add(bo);
                db.SaveChanges();

            }
        }

        public void deleteBook(int id)
        {
            using (crudDesdeCeroEntities db = new crudDesdeCeroEntities())
            {
                var bo = db.book.Where(book => book.Id == id).FirstOrDefault();
                db.book.Remove(bo);
                db.SaveChanges();
            }
        }

        public void updateBook(bookView book)
        {
            using (crudDesdeCeroEntities db = new crudDesdeCeroEntities())
            {
                var b = db.book.Find(book.id);

                if (b != null)
                {
                    b.Name = book.Name;
                    b.Author = book.Author;
                    b.ISBN = book.ISBN;
                    db.SaveChanges();
                }
                else
                {
                    throw new Exception("El libro no fue encontrado.");
                }
            }
        }

        public bookView GetBook(bookView book)
        {
            using (crudDesdeCeroEntities db = new crudDesdeCeroEntities())
            {
                var BO = db.book.Find(book.id);

                if(BO != null)
                {
                    return new bookView
                    {
                        id = BO.Id,
                        Name = BO.Name,
                        Author = BO.Author,
                        ISBN = BO.ISBN
                    };
                }
                return null;
            }
        }
    }
}