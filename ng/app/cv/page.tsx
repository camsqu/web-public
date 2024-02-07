import { title } from "@/components/primitives";
import { User } from "@nextui-org/user";

export default function ResumePage() {
	return (
		<div>
			<h1 className={title()}>Resume/CV</h1>
			<div className="text-xl items-left justify-start">
				<User 
					name="Cameron Squire"
					description="A 24-year old networking and security enthusiast, surfing on the internet."
					avatarProps={{
						src: "https://media.licdn.com/dms/image/D5603AQEx__O84ryKlA/profile-displayphoto-shrink_200_200/0/1675265828854?e=1712793600&v=beta&t=5DawXRpIa3edcdLuVOobbA_yDsArVmJuzW44InyYhVE"
					}}
					/>
			</div>
			
		</div>
	);
}
