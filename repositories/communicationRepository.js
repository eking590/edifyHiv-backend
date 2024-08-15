
import Communication from "../models/communicationModel.js";

class CommunicationRepository {
  async create(communication) {
    const newCommunication = new Communication(communication);
    return await newCommunication.save();
  }

  async findAll() {
    return await Communication.find();
  }

  async findById(id) {
    return await Communication.findById(id);
  }


  async update(id, member) {
    return await Communication.findByIdAndUpdate(id, member, { new: true });
  }

  async delete(id) {
    return await Communication.findByIdAndRemove(id);
  }

  async findOne(query) {
    return await Communication.findOne(query)
  }

  
}

export default new CommunicationRepository();
