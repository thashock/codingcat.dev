<script lang="ts">
	import 'prism-themes/themes/prism-shades-of-purple.min.css';
	import Video from '$lib/components/content/Video.svelte';
	import type { Author, Sponsor, Course } from '$lib/types';
	import LessonCards from './LessonCards.svelte';
	import Image from '$lib/components/content/Image.svelte';
	export let data: {
		course: Course;
		authors: Author[];
		sponsors: Sponsor[];
	};
</script>

{#if data?.course}
	<div class="flex flex-col justify-center !text-token p-2 md:p-4 xl:p-8 w-full items-center">
		<section class="justify-center flex flex-col gap-2 md:gap-8 max-w-7xl">
			<ol class="bcu-breadcrumb">
				<li class="bcu-crumb"><a href="/courses">Courses</a></li>
				<li class="bcu-crumb-separator" aria-hidden>&rsaquo;</li>
				<li>{data.course.title}</li>
			</ol>
			<div class="flex flex-col gap-2 md:gap-8">
				{#if data?.course?.youtube}
					<Video src={data.course.youtube} title={`${data.course.title}`} />
				{:else if data?.course?.cover}
					<Image src={data.course.cover} alt={data.course.title} />
				{/if}
				{#if data?.authors}
					<section class="flex">
						{#each data?.authors as author (author.slug)}
							<a
								class="bcu-button flex gap-2 items-center variant-ghost p-2 rounded-md"
								href={`/author/${author.slug}`}
							>
								{#if author?.cover}
									<div class="w-8 md:w-12">
										{#key author.slug}
											<Image src={author.cover} alt={author?.name} />
										{/key}
									</div>
								{/if}
								<div>{author?.name}</div>
							</a>
						{/each}
					</section>
				{/if}
				<h1>{data.course.title}</h1>
				<!-- Sponsors -->
				{#if data?.sponsors?.length}
					<h2>Sponsors</h2>
					<section class="flex flex-col gap-2 md:flex-row md:gap-8">
						{#each data?.sponsors as sponsor (sponsor.slug)}
							<a
								class="overflow-hidden bcu-card bg-initial card-hover md:flex-1"
								href={`${sponsor.url}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<header>
									{#if sponsor?.cover}
										<Image
											src={sponsor.cover}
											alt={sponsor.name}
											classes="object-cover w-full bg-cover rounded bg-black/50 aspect-video"
										/>
									{/if}
								</header>
								<div class="p-4 space-y-4">
									<h3 data-toc-ignore="">{sponsor?.name}</h3>
									<article>
										<p>
											{sponsor?.description}
										</p>
									</article>
								</div>
							</a>
						{/each}
					</section>
				{/if}
				<section class="flex-grow w-full markdown flex flex-col gap-2 md:gap-8">
					<slot />
				</section>
			</div>
			{#if data?.course?.lesson}
				<div class="flex flex-col gap-2 md:gap-8">
					<h2>Lessons</h2>
					<LessonCards lesson={data.course.lesson} courseSlug={data.course.slug} />
				</div>
			{/if}
		</section>
	</div>
{:else}
	<p>No data found yet</p>
{/if}
