import mongoose from 'mongoose';



const CommunicationSchema = new mongoose.Schema({
  title: String,
  To: String,
  email: String,
  Message: String,
  GroupName: String,
  addEmails:Array, 

}, {
  timestamps: true,
});

const Communication = mongoose.model('Communication', CommunicationSchema);

export default Communication;
