<script>
	import cardFront from '$lib/images/bg-card-front.png';
	import cardBack from '$lib/images/bg-card-back.png';
	import cardLogo from '$lib/images/card-logo.svg';
	import iconComplete from '$lib/images/icon-complete.svg';

	import { Input, Label, Button } from 'flowbite-svelte';

	let formVisible = true;
</script>

<!--
    Lesson Learned:
    Use position relative / absolute when need to shift elements arbitrarily (have I consider grid?)
    Use aboslute sizing utility to keep image and text sizing synced 
-->

<div class="flex flex-col font-mono lg:grid lg:h-screen lg:grid-cols-3">
	<!-- Component: Card front and back images, responsive -->
	<div class="relative h-[40vh] bg-desktop-bg bg-cover lg:h-full">
		<div class="absolute top-1/2 left-2 z-10 w-max lg:left-[60%] lg:top-[20%]">
			<img src={cardFront} alt="credit card front" class="w-80" />
			<img src={cardLogo} alt="logo" class="absolute top-2 left-2 w-16" />
			<span class="absolute left-[10%] top-1/2 text-xl tracking-widest text-white"
				>0000 0000 0000 0000</span
			>
			<span class="absolute left-[10%] top-2/3  text-white">JANE APPLESEED</span>
			<span class="absolute left-[72%] top-2/3 text-white">00/00</span>
		</div>
		<div class="relative top-[10%] left-5 w-max  lg:left-2/3 lg:top-[42%]">
			<img src={cardBack} alt="credit card back" class="w-80" />
		</div>
	</div>

	<!-- Credit Card Form element -->
	<div class="col-span-2 place-self-center ">
		{#if formVisible}
			<form class="mt-14 max-w-lg space-y-4  p-4">
				<div>
					<Label for="name">CARDHOLDER NAME</Label>
					<Input type="text" id="name" placeholder="e.g. Jane Appleseed" />
				</div>
				<div>
					<Label for="card-num">CARDHOLDER NUMBER</Label>
					<Input type="text" id="card-num" placeholder="e.g. 1234 5678 9123 0000" />
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div>
						<Label>EXP. DATE (MM/YY)</Label>
						<div class="grid grid-cols-2 gap-2">
							<Input type="text" id="ex-month" placeholder="MM" />
							<Input type="text" id="ex-year" placeholder="YY" />
						</div>
					</div>
					<div>
						<Label for="cvc">CVC</Label>
						<Input type="text" id="cvc" placeholder="e.g. 123" />
					</div>
				</div>
				<!-- Style Flowbite Button using Tailwind -->
				<Button type="submit" class="w-full bg-indigo-900" on:click={() => (formVisible = false)}
					>Confirm</Button
				>
			</form>
		{:else}
			<div class="mt-14 space-y-4 p-4 text-center">
				<img src={iconComplete} alt="" class="mx-auto" />
				<p class="text-3xl tracking-widest">THANK YOU!</p>
				<p class="text-gray-500">We've Added Your Credit Card Details</p>
				<Button class="w-full bg-indigo-900" on:click={() => (formVisible = true)}>Continue</Button>
			</div>
		{/if}
	</div>
</div>
