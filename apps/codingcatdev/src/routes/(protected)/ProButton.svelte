<script lang="ts">
	export let products: {
		price: string;
		id: string;
	}[];

	export let uid: string | undefined;

	import { Icon } from '@steeze-ui/svelte-icon';
	import { RocketLaunch } from '@steeze-ui/heroicons';

	import { modalStore, type ModalSettings } from '@codingcatdev/blackcatui';

	import ProModal from './ProModal.svelte';

	const showPro = () => {
		const d: ModalSettings = {
			type: 'component',
			component: {
				ref: ProModal
			},
			meta: {
				products: products,
				uid
			}
		};
		modalStore.trigger(d);
	};
</script>

<button
	class="bcu-card variant-filled-primary w-full md:max-w-sm p-8 relative hover:shadow-2xl hover:scale-105 hover:cursor-pointer ease-in-out duration-300 flex flex-col justify-center items-center"
	aria-label="open-pro-modal"
	on:click={showPro}
>
	<div
		class="absolute bottom-4 -right-8 -rotate-45 px-8"
		style="background-color: rgb(var(--color-surface-500));"
	>
		<div>Go Pro</div>
	</div>
	<h2 class="py-4 font-bold leading-loose">Go Pro!</h2>
	<ul
		class="text-left w-7/8 justify-self-center font-semibold text-md md:text-lg flex flex-col gap-1 pb-4"
	>
		<li class="my-2 flex flex-row gap-1 items-center">
			<Icon src={RocketLaunch} theme="solid" class="w-6" />
			Watch all PRO courses
		</li>
		<li class="my-2 flex flex-row gap-1 items-center">
			<Icon src={RocketLaunch} theme="solid" class="w-6" />
			Join PRO office hours
		</li>
		<li class="my-2 flex flex-row gap-1 items-center">
			<Icon src={RocketLaunch} theme="solid" class="w-6" />
			Read all PRO posts
		</li>
		<li class="my-2 flex flex-row gap-1 items-center">
			<Icon src={RocketLaunch} theme="solid" class="w-6" />
			Get PRO source code from GitHub
		</li>
	</ul>
</button>
