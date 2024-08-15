import mongoose from 'mongoose';



const AccountSchema = new mongoose.Schema({
  churchName: String,
  email: String,
  leadPastorName: String,
  ChurchAdminName: String,
  ChurchHQAddress: String,
  ChurchContactPhoneNumber: String,
  EmailAddress: String,
  password: String,
}, {
  timestamps: true,
});

const Account = mongoose.model('Account', AccountSchema);

export default Account;

