import communicationRepository from "../repositories/communicationRepository.js";
import asyncHandler from "express-async-handler";







// create communication 
export const createCommunication = async (req, res) => {
  try {
   

   const newCommunication = {
    title:req.body.title,
    To:req.body.To,
    email:req.body.email,
    Message:req.body.Message,
    GroupName:req.body.GroupName,
    addEmails:req.body.addEmails,
   }

  
      const communication = await communicationRepository.create(newCommunication);
      //await WelcomeEmail(newUser.email, newUser.fullName)
      res.status(201).send({communication, message:"message communicated to members!!" });
   

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}




// export const createAdmin = async (data, res) => {
//   console.log("data here",data)
//   try {
    
//     const hashedPassword = await bcrypt.hash(data.password, 8);
//     const user = await userRepository.create({ ...data, password: hashedPassword });
//     if(user){
//       console.log("created Admin")
//     //await SendLoginDetailsToSchoolAdmin(data.email, data.fullName, data.password)

//       return true
//     }else{
//       return false
//     }
  
//     // res.status(201).send(user);
//   } catch (err) {
//     return false
//     //console.log("there was and error here", err)
//     // res.status(500).send({ message: err.message });
//   }
// };

// export const findAll = async (req, res) => {
//   try {
//     const users = await userRepository.findAll();
//     res.status(200).send(users);
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// };

// export const findOne = async (req, res) => {
//   try {
//     const user = await userRepository.findById(req.params.id);
//     if (!user) {
//       return res.status(404).send({ message: 'User not found' });
//     }
//     res.status(200).send(user);
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// };

// export const update = async (req, res) => {
//   try {
//     const user = await userRepository.update(req.params.id, req.body);
//     if (!user) {
//       return res.status(404).send({ message: 'User not found' });
//     }
//     res.status(200).send(user);
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// };

// export const deleteUser = async (req, res) => {
//   try {
//     const user = await userRepository.delete(req.params.id);
//     if (!user) {
//       return res.status(404).send({ message: 'User not found' });
//     }
//     res.status(200).send({ message: 'User deleted successfully' });
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// };








