
import Member from "../models/membersModel.js";

class MemberRepository {
  async create(member) {
    const newMember = new Member(member);
    return await newMember.save();
  }

  async findAll() {
    return await Member.find();
  }

  async findById(id) {
    return await Member.findById(id);
  }


  async update(id, member) {
    return await Member.findByIdAndUpdate(id, member, { new: true });
  }

  async delete(id) {
    return await Member.findByIdAndRemove(id);
  }

  async findOne(query) {
    return await Member.findOne(query)
  }

  
}

export default new MemberRepository();
