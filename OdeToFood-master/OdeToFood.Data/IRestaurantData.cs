﻿using System.Linq;
using System.Collections.Generic;
using OdeToFood.Core;

namespace OdeToFood.Data
{
    public interface IRestaurantData
    {
        IEnumerable<Restaurant> GetAll();
    }

    public class InMemoryRestaurantData : IRestaurantData
    {
        readonly List<Restaurant> restaurants;

        public InMemoryRestaurantData()
        {
            restaurants = new List<Restaurant>()
            {
                new Restaurant { Id = 1, Name = "Scott's Pizza", Location = "Maryland", Cuisine=CuisineType.Italian, Prize = "30€"},
                new Restaurant { Id = 2, Name = "Cinnamon Club", Location = "London", Cuisine=CuisineType.Italian, Prize = "40€"},
                new Restaurant { Id = 3, Name = "La Costa", Location = "California", Cuisine=CuisineType.Mexican, Prize = "56€"},
                new Restaurant { Id = 1, Name = "Manolos's Curry", Location = "Madrid", Cuisine=CuisineType.Indian, Prize = "70€"},
                new Restaurant { Id = 1, Name = "Manolos's Curry", Location = "Madrid", Cuisine=CuisineType.Indian, Prize = "20€"},
            };
        }

        public IEnumerable<Restaurant> GetAll()
        {
            return from r in restaurants
                   orderby r.Name
                   select r;
        }
    }
}
