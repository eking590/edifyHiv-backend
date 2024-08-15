

import Account from "../models/accountModel.js";

class AccountRepository {
  async create(account) {
    const newAccount = new Account(account);
    return await newAccount.save();
  }

  async findAll() {
    return await Account.find();
  }

  async findById(id) {
    return await Account.findById(id);
  }


  async update(id, account) {
    return await Account.findByIdAndUpdate(id, account, { new: true });
  }

  async delete(id) {
    return await Account.findByIdAndRemove(id);
  }

  async findOne(query) {
    return await Account.findOne(query)
  }

  
}

export default new AccountRepository();
