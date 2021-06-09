import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useHistory, useParams } from "react-router-dom";
import { Dish } from "../../components/dish";
import { RESTAURANT_FRAGMENT } from "../../fragments";
import { useMe } from "../../hooks/useMe";

export const MY_RESTAURANT_QUERY = gql`
  ${RESTAURANT_FRAGMENT}
  query myRestaurant($input: MyRestaurantInput!) {
    myRestaurant(input: $input) {
      ok
      error
      restaurant {
        ...RestaurantParts
      }
    }
  }
`;

interface IParams {
  id: string;
}

export const MyRestaurant = () => {
  const { id } = useParams<IParams>();

  return <div>MyRestaurant</div>;
};
