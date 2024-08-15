import mongoose from 'mongoose';



const MemberSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  PhoneNumber: String,
  Country: String,
  State: String,
  Region: String, 
  Address: String,
}, {
  timestamps: true,
});

const Member = mongoose.model('Member', MemberSchema);

export default Member;

