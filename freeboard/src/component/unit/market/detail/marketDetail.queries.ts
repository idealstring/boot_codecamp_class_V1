import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
        createdAt
        updatedAt
        deletedAt
      }
      buyer {
        _id
        email
        name
        picture
        # userPoint {
        #   _id
        #   amount
        #   user
        #   createdAt
        #   updatedAt
        #   deletedAt
        # }
        createdAt
        updatedAt
        deletedAt
      }
      seller {
        _id
        email
        name
        picture
        # userPoint {
        #   _id
        #   amount
        #   user
        #   createdAt
        #   updatedAt
        #   deletedAt
        # }
        createdAt
        updatedAt
        deletedAt
      }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
