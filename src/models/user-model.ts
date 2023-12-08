import { Instance, types } from 'mobx-state-tree';

// TODO
const AddressModel = types.model('Address', {
  street: types.string,
  suite: types.string,
  city: types.string,
  zipcode: types.string,
  geo: types.model({
    lat: types.string,
    lng: types.string,
  }),
});

// TODO
const CompanyModel = types.model('Company', {
  name: types.string,
  catchPhrase: types.string,
  bs: types.string,
});

export const UserModel = types.model('User', {
  id: types.identifierNumber,
  name: types.string,

  // TODO describe all api fields
  // username: types.string,
  // email: types.string,
  // address: AddressModel,
  // phone: types.string,
  // website: types.string,
  // company: CompanyModel,
  disabled: types.optional(types.boolean, false),
  isUserInMainList: types.optional(types.boolean, true),
});

export default UserModel;

export type UserType = Instance<typeof UserModel>;
