import membersRepository from "../repositories/membersRepository.js";
import asyncHandler from "express-async-handler";




// export const create =  asyncHandler(async (req, res) => {
//   try {
//     const existingMember = await membersRepository.findByEmail(req.body.email);
//     if (existingMember) {
//        res.status(400).send({ message: 'Member already exists' });
//        throw new Error('Member not Found!!!')
//     };

//     const account = await AccountRepository.create({ ...req.body });
//     res.status(201).send(account);
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }

// });


// create account 
export const createMember = async (req, res) => {
  try {
    //check if there is an existing email 
    const existingMember = await membersRepository.findOne({ email: req.body.email });
    if (existingMember) {
      return res.status(400).send({ message: 'Member already exists' });
    }

   const newMember = {
    email:req.body.email,
    fullName:req.body.fullName,
    PhoneNumber:req.body.PhoneNumber,
    Country:req.body.Country,
    State:req.body.State,
    Region:req.body.Region,
    Address: req.body.Address,
   }

  
      const member = await membersRepository.create(newMember);
      //await WelcomeEmail(newUser.email, newUser.fullName)
      res.status(201).send({member, message:"member added successfully!!" });
   

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








