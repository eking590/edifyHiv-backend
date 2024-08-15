import mongoose from 'mongoose';



const GroupSchema = new mongoose.Schema({
  title: String,
  email: Array,
  churchId:String,

}, {
  timestamps: true,
});

const Group = mongoose.model('Group', GroupSchema);

export default Group;
