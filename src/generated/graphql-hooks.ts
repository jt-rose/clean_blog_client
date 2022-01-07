import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
};

export type Comment = {
  __typename?: 'Comment';
  comment_id: Scalars['Int'];
  comment_text: Scalars['String'];
  comments: PaginatedComments;
  created_at: Scalars['Time'];
  deleted: Scalars['Boolean'];
  hasSubComments: Scalars['Boolean'];
  post_id: Scalars['Int'];
  response_to_comment_id?: Maybe<Scalars['Int']>;
  user: User;
  user_id: Scalars['Int'];
  votes: Votes;
};

export type CommentSearch = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  parent_id: Scalars['Int'];
  parent_type: ParentType;
};

export type CommentVote = {
  __typename?: 'CommentVote';
  comment_id: Scalars['Int'];
  user_id: Scalars['Int'];
  vote_value: VoteValue;
};

export type Mutation = {
  __typename?: 'Mutation';
  accessPasswordReset: Scalars['Boolean'];
  addComment: Comment;
  addPost: Post;
  deleteComment: Scalars['Boolean'];
  deletePost: Scalars['Boolean'];
  editComment: Comment;
  editPost: Post;
  forgotPassword: Scalars['Boolean'];
  login: User;
  logout: Scalars['Boolean'];
  registerNewUser: User;
  resetPassword: User;
  restoreComment: Scalars['Boolean'];
  restorePost: Scalars['Boolean'];
  voteOnComment: CommentVote;
  voteOnPost: PostVote;
};


export type MutationAccessPasswordResetArgs = {
  resetKey: Scalars['String'];
};


export type MutationAddCommentArgs = {
  comment_text: Scalars['String'];
  post_id: Scalars['Int'];
  response_to_comment_id?: InputMaybe<Scalars['Int']>;
};


export type MutationAddPostArgs = {
  author_id: Scalars['Int'];
  postInput: PostInput;
};


export type MutationDeleteCommentArgs = {
  comment_id: Scalars['Int'];
};


export type MutationDeletePostArgs = {
  author_id: Scalars['Int'];
  post_id: Scalars['Int'];
};


export type MutationEditCommentArgs = {
  comment_id: Scalars['Int'];
  new_comment_text: Scalars['String'];
};


export type MutationEditPostArgs = {
  author_id: Scalars['Int'];
  postInput: PostInput;
  post_id: Scalars['Int'];
};


export type MutationForgotPasswordArgs = {
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterNewUserArgs = {
  userInput: UserInput;
};


export type MutationResetPasswordArgs = {
  new_password: Scalars['String'];
  resetKey: Scalars['String'];
  user_id: Scalars['Int'];
};


export type MutationRestoreCommentArgs = {
  comment_id: Scalars['Int'];
};


export type MutationRestorePostArgs = {
  author_id: Scalars['Int'];
  post_id: Scalars['Int'];
};


export type MutationVoteOnCommentArgs = {
  comment_id: Scalars['Int'];
  vote_value: VoteValue;
};


export type MutationVoteOnPostArgs = {
  post_id: Scalars['Int'];
  vote_value: VoteValue;
};

export type PaginatedComments = {
  __typename?: 'PaginatedComments';
  comments?: Maybe<Array<Maybe<Comment>>>;
  more: Scalars['Boolean'];
};

export type PaginatedPosts = {
  __typename?: 'PaginatedPosts';
  more: Scalars['Boolean'];
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type PaginatedUsers = {
  __typename?: 'PaginatedUsers';
  more: Scalars['Boolean'];
  users?: Maybe<Array<Maybe<User>>>;
};

export enum ParentType {
  Comment = 'comment',
  Post = 'post'
}

export type Post = {
  __typename?: 'Post';
  comments: PaginatedComments;
  created_at: Scalars['Time'];
  deleted: Scalars['Boolean'];
  post_id: Scalars['Int'];
  post_text: Scalars['String'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
  urlEncodedTitle: Scalars['String'];
  user?: Maybe<User>;
  user_id: Scalars['Int'];
  votes: Votes;
};

export type PostInput = {
  subtitle?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  title: Scalars['String'];
};

export type PostSearch = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
};

export type PostVote = {
  __typename?: 'PostVote';
  post_id: Scalars['Int'];
  user_id: Scalars['Int'];
  vote_value: VoteValue;
};

export type Query = {
  __typename?: 'Query';
  getManyComments: PaginatedComments;
  getManyPosts: PaginatedPosts;
  getManyUsers: PaginatedUsers;
  getPost?: Maybe<Post>;
  getPostByUsernameAndTitle?: Maybe<Post>;
  getUser?: Maybe<User>;
  getUserByUsername?: Maybe<User>;
  isAuthor: Scalars['Boolean'];
  me?: Maybe<User>;
};


export type QueryGetManyCommentsArgs = {
  commentSearch: CommentSearch;
};


export type QueryGetManyPostsArgs = {
  author_id: Scalars['Int'];
  postSearch: PostSearch;
};


export type QueryGetManyUsersArgs = {
  userSearch: UserSearch;
};


export type QueryGetPostArgs = {
  post_id: Scalars['Int'];
};


export type QueryGetPostByUsernameAndTitleArgs = {
  title: Scalars['String'];
  username: Scalars['String'];
};


export type QueryGetUserArgs = {
  user_id: Scalars['Int'];
};


export type QueryGetUserByUsernameArgs = {
  username: Scalars['String'];
};


export type QueryIsAuthorArgs = {
  author_id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  comments: PaginatedComments;
  created_at: Scalars['Time'];
  email: Scalars['String'];
  posts: PaginatedPosts;
  user_id: Scalars['Int'];
  username: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserSearch = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  username?: InputMaybe<Scalars['String']>;
};

export enum VoteValue {
  Downvote = 'downvote',
  Neutral = 'neutral',
  Upvote = 'upvote'
}

export type Votes = {
  __typename?: 'Votes';
  downvote: Scalars['Int'];
  upvote: Scalars['Int'];
};

export type AccessPasswordResetMutationVariables = Exact<{
  resetKey: Scalars['String'];
}>;


export type AccessPasswordResetMutation = { __typename?: 'Mutation', accessPasswordReset: boolean };

export type ForgotPasswordMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', user_id: number, username: string, email: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', user_id: number, username: string, email: string, created_at: any } | null | undefined };

export type RegisterNewUserMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterNewUserMutation = { __typename?: 'Mutation', registerNewUser: { __typename?: 'User', user_id: number, username: string, email: string, created_at: any } };

export type ResetPasswordMutationVariables = Exact<{
  resetKey: Scalars['String'];
  user_id: Scalars['Int'];
  new_password: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'User', user_id: number, username: string, email: string } };

export type GetPostsQueryVariables = Exact<{
  author_id: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type GetPostsQuery = { __typename?: 'Query', getManyPosts: { __typename?: 'PaginatedPosts', more: boolean, posts?: Array<{ __typename?: 'Post', post_id: number, title: string, urlEncodedTitle: string } | null | undefined> | null | undefined } };

export type GetUserWithPostsQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUserWithPostsQuery = { __typename?: 'Query', getUserByUsername?: { __typename?: 'User', user_id: number, username: string, posts: { __typename?: 'PaginatedPosts', more: boolean, posts?: Array<{ __typename?: 'Post', post_id: number, title: string, urlEncodedTitle: string, subtitle: string, post_text: string, created_at: any, deleted: boolean, votes: { __typename?: 'Votes', upvote: number, downvote: number } } | null | undefined> | null | undefined } } | null | undefined };

export type GetPostQueryVariables = Exact<{
  post_id: Scalars['Int'];
}>;


export type GetPostQuery = { __typename?: 'Query', getPost?: { __typename?: 'Post', post_id: number, user_id: number, title: string, urlEncodedTitle: string, subtitle: string, post_text: string, created_at: any, votes: { __typename?: 'Votes', upvote: number, downvote: number } } | null | undefined };


export const AccessPasswordResetDocument = `
    mutation AccessPasswordReset($resetKey: String!) {
  accessPasswordReset(resetKey: $resetKey)
}
    `;
export const useAccessPasswordResetMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AccessPasswordResetMutation, TError, AccessPasswordResetMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AccessPasswordResetMutation, TError, AccessPasswordResetMutationVariables, TContext>(
      'AccessPasswordReset',
      (variables?: AccessPasswordResetMutationVariables) => fetcher<AccessPasswordResetMutation, AccessPasswordResetMutationVariables>(client, AccessPasswordResetDocument, variables, headers)(),
      options
    );
export const ForgotPasswordDocument = `
    mutation ForgotPassword($username: String!) {
  forgotPassword(username: $username)
}
    `;
export const useForgotPasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ForgotPasswordMutation, TError, ForgotPasswordMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ForgotPasswordMutation, TError, ForgotPasswordMutationVariables, TContext>(
      'ForgotPassword',
      (variables?: ForgotPasswordMutationVariables) => fetcher<ForgotPasswordMutation, ForgotPasswordMutationVariables>(client, ForgotPasswordDocument, variables, headers)(),
      options
    );
export const LoginDocument = `
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    user_id
    username
    email
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      'Login',
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    );
export const LogoutDocument = `
    mutation Logout {
  logout
}
    `;
export const useLogoutMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LogoutMutation, TError, LogoutMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LogoutMutation, TError, LogoutMutationVariables, TContext>(
      'Logout',
      (variables?: LogoutMutationVariables) => fetcher<LogoutMutation, LogoutMutationVariables>(client, LogoutDocument, variables, headers)(),
      options
    );
export const MeDocument = `
    query Me {
  me {
    user_id
    username
    email
    created_at
  }
}
    `;
export const useMeQuery = <
      TData = MeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: MeQueryVariables,
      options?: UseQueryOptions<MeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<MeQuery, TError, TData>(
      variables === undefined ? ['Me'] : ['Me', variables],
      fetcher<MeQuery, MeQueryVariables>(client, MeDocument, variables, headers),
      options
    );
export const RegisterNewUserDocument = `
    mutation RegisterNewUser($username: String!, $email: String!, $password: String!) {
  registerNewUser(
    userInput: {username: $username, email: $email, password: $password}
  ) {
    user_id
    username
    email
    created_at
  }
}
    `;
export const useRegisterNewUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RegisterNewUserMutation, TError, RegisterNewUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RegisterNewUserMutation, TError, RegisterNewUserMutationVariables, TContext>(
      'RegisterNewUser',
      (variables?: RegisterNewUserMutationVariables) => fetcher<RegisterNewUserMutation, RegisterNewUserMutationVariables>(client, RegisterNewUserDocument, variables, headers)(),
      options
    );
export const ResetPasswordDocument = `
    mutation ResetPassword($resetKey: String!, $user_id: Int!, $new_password: String!) {
  resetPassword(
    resetKey: $resetKey
    user_id: $user_id
    new_password: $new_password
  ) {
    user_id
    username
    email
  }
}
    `;
export const useResetPasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ResetPasswordMutation, TError, ResetPasswordMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ResetPasswordMutation, TError, ResetPasswordMutationVariables, TContext>(
      'ResetPassword',
      (variables?: ResetPasswordMutationVariables) => fetcher<ResetPasswordMutation, ResetPasswordMutationVariables>(client, ResetPasswordDocument, variables, headers)(),
      options
    );
export const GetPostsDocument = `
    query GetPosts($author_id: Int!, $title: String, $limit: Int!, $offset: Int!) {
  getManyPosts(
    postSearch: {title: $title, limit: $limit, offset: $offset}
    author_id: $author_id
  ) {
    posts {
      post_id
      title
      urlEncodedTitle
    }
    more
  }
}
    `;
export const useGetPostsQuery = <
      TData = GetPostsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPostsQueryVariables,
      options?: UseQueryOptions<GetPostsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPostsQuery, TError, TData>(
      ['GetPosts', variables],
      fetcher<GetPostsQuery, GetPostsQueryVariables>(client, GetPostsDocument, variables, headers),
      options
    );
export const GetUserWithPostsDocument = `
    query GetUserWithPosts($username: String!) {
  getUserByUsername(username: $username) {
    user_id
    username
    posts {
      posts {
        post_id
        title
        urlEncodedTitle
        subtitle
        post_text
        created_at
        votes {
          upvote
          downvote
        }
        deleted
      }
      more
    }
  }
}
    `;
export const useGetUserWithPostsQuery = <
      TData = GetUserWithPostsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetUserWithPostsQueryVariables,
      options?: UseQueryOptions<GetUserWithPostsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUserWithPostsQuery, TError, TData>(
      ['GetUserWithPosts', variables],
      fetcher<GetUserWithPostsQuery, GetUserWithPostsQueryVariables>(client, GetUserWithPostsDocument, variables, headers),
      options
    );
export const GetPostDocument = `
    query GetPost($post_id: Int!) {
  getPost(post_id: $post_id) {
    post_id
    user_id
    title
    urlEncodedTitle
    subtitle
    post_text
    created_at
    votes {
      upvote
      downvote
    }
  }
}
    `;
export const useGetPostQuery = <
      TData = GetPostQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPostQueryVariables,
      options?: UseQueryOptions<GetPostQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPostQuery, TError, TData>(
      ['GetPost', variables],
      fetcher<GetPostQuery, GetPostQueryVariables>(client, GetPostDocument, variables, headers),
      options
    );