import { User, UserId } from "../Users/types"

export type TimestampableBehavior = {
  createdAt: Date;
  updatedAt: Date
}

export type BlameableBehavior = TimestampableBehavior & {
  createdById: UserId;
  updatedById: UserId;
}

export type BlameableBehaviorComposite = BlameableBehavior & {
  createdBy: User;
  updatedBy: User;
}

export type SoftDeleteBehavior = {
  isDeleted: boolean;
  deletedById?: UserId;
  deletedAt?: Date;
}

export type SoftDeleteBehaviorComposite = SoftDeleteBehavior & {
  deletedBy?: UserId;
}

export type ReadOnlyBehavior = {
  createdAt: Date;
  createdById: UserId;
}

export type ReadOnlyBehaviorComposite = {
  createdBy: User;
}

export type VersionalbleBehavior = {
  isCurrentVersion: boolean;
  version: Number;
  createdAt: Date;
}

export type ValidateBehavior = {
  isValidated: boolean;
  // type: Draft | Published
}
