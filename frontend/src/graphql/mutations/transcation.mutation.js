import { gql } from "@apollo/client";

export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($input: CreateTransactionInput!) {
    createTransaction(input: $input) {
      # these are the data of the response to take back
      _id
      description
      paymentType
      category
      amount
      location
      date
    }
  }
`;

export const UPDATE_TRANSACTION = gql`
  mutation UpdateTransaction($input: UpdateTransactionInput!) {
    updateTransaction(input: $input) {
      # these are the data of the response to take back
      _id
      description
      paymentType
      category
      amount
      location
      date
    }
  }
`;
export const DELETE_TRANSACTION = gql`
  mutation DeleteTransaction($transactionId: ID!) {
    deleteTransaction(transactionId: $transactionId) {
      # these are the data of the response to take back
      _id
      description
      paymentType
      category
      amount
      location
      date
    }
  }
`;
