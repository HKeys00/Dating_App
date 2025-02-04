type ProfileType = {
  Id: number;
  name: string;
  age: number;
  sociability: string;
  height: number;
  location: string;
  images: string[];
  hobbies: string[];
  prompts: PromptType[];
};

export default ProfileType;
