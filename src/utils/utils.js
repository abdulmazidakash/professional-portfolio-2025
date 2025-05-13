import useAxiosPublic from "../hooks/useAxiosPublic";


// eslint-disable-next-line react-hooks/rules-of-hooks
const axiosPublic = useAxiosPublic();

export const imageUpload = async imageData => {
	const formData = new FormData();
	formData.append('image', imageData); // ইমেজ ফাইল যুক্ত করা
  
	const { data } = await axiosPublic.post(
	  `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, // API key .env ফাইল থেকে নিচ্ছে
	  formData,
	  {
		headers: {
		  'Content-Type': 'multipart/form-data', // ফর্মডেটা পাঠানোর জন্য প্রয়োজনীয় হেডার
		},
	  }
	);
  
	return data.data.display_url; // সফল হলে display_url রিটার্ন
  };
  

export const saveUser = async user =>{
	await axiosPublic.post(`${import.meta.env.VITE_API_URL}/users/${user.email}`, {
		name: user.displayName,
		image: user.photoURL,
		email: user.email,
	  });
}

export const shortImageName = (image, length = 10) =>{

	if(!image || typeof image?.name !== 'string') return 'Choose Image'

	if(image?.name.length <= 15) return image?.name
	return image?.name
		.substring(0, length)
		.concat(`...${image?.type.split('/')[1]}`)
}