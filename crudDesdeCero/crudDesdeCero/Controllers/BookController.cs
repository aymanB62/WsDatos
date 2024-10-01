using crudDesdeCero.Models.EntityManager;
using crudDesdeCero.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace crudDesdeCero.Controllers
{
    public class BookController : Controller
    {

        [HttpGet]
        public ActionResult ListBooks()
        {

            crudManager CM = new crudManager();

            List<bookView> books = CM.ListBooks();

            return View(books);
        }

        [HttpGet]
        public ActionResult addBook()
        {
            return View();
        }

        [HttpPost]
        public ActionResult addBook(bookView BV)
        {
            if (ModelState.IsValid)
            {
                crudManager crudManager = new crudManager();
                crudManager.addBook(BV);
                return RedirectToAction("ListBooks");
            }
            return View(BV);
        }

        [HttpPost]
        public ActionResult deleteBook(int id)
        {
            try
            {
                crudManager crudManager = new crudManager();
                crudManager.deleteBook(id);
                return RedirectToAction("ListBooks");
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", "Error al eliminar el libro: " + ex.Message);
                return RedirectToAction("ListBooks");
            }
        }


        [HttpGet]
        public ActionResult UpdateBook(int id)
        {
            crudManager manager = new crudManager();
            var book = manager.ListBooks().FirstOrDefault(b => b.id == id);

            if (book == null)
            {
                return HttpNotFound();
            }

            return View(book);
        }

        [HttpPost]
        public ActionResult UpdateBook(bookView book)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    crudManager manager = new crudManager();
                    manager.updateBook(book);
                    return RedirectToAction("ListBooks");
                }
                return View(book);
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", "Error al actualizar el libro: " + ex.Message);
                return View(book);
            }

        }

        public ActionResult Details(int id)
        {
            var bookView = new bookView { id = id };
            crudManager manager = new crudManager();
            var book = manager.GetBook(bookView);

            if (book == null)
            {
                return HttpNotFound();
            }

            return View(book);
        }


    }
    }