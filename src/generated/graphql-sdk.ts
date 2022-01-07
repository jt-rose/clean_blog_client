import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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


export const AccessPasswordResetDocument = gql`
    mutation AccessPasswordReset($resetKey: String!) {
  accessPasswordReset(resetKey: $resetKey)
}
    `;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($username: String!) {
  forgotPassword(username: $username)
}
    `;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    user_id
    username
    email
  }
}
    `;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export const MeDocument = gql`
    query Me {
  me {
    user_id
    username
    email
    created_at
  }
}
    `;
export const RegisterNewUserDocument = gql`
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
export const ResetPasswordDocument = gql`
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
export const GetPostsDocument = gql`
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
export const GetUserWithPostsDocument = gql`
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
export const GetPostDocument = gql`
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AccessPasswordReset(variables: AccessPasswordResetMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AccessPasswordResetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AccessPasswordResetMutation>(AccessPasswordResetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AccessPasswordReset');
    },
    ForgotPassword(variables: ForgotPasswordMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ForgotPasswordMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ForgotPasswordMutation>(ForgotPasswordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ForgotPassword');
    },
    Login(variables: LoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutation>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Login');
    },
    Logout(variables?: LogoutMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LogoutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LogoutMutation>(LogoutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Logout');
    },
    Me(variables?: MeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MeQuery>(MeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Me');
    },
    RegisterNewUser(variables: RegisterNewUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterNewUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterNewUserMutation>(RegisterNewUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RegisterNewUser');
    },
    ResetPassword(variables: ResetPasswordMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ResetPasswordMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ResetPasswordMutation>(ResetPasswordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ResetPassword');
    },
    GetPosts(variables: GetPostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPostsQuery>(GetPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPosts');
    },
    GetUserWithPosts(variables: GetUserWithPostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserWithPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserWithPostsQuery>(GetUserWithPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUserWithPosts');
    },
    GetPost(variables: GetPostQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPostQuery>(GetPostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPost');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;