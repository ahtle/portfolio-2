<template>
	<div id="SectionSix" class="section-container">
		<h3 class="section-header" style="margin-bottom: 20px">{{ header }}</h3>
		<p style="margin-bottom: 64px">Professional and personal Projects</p>

		<div class="project-container flex h-center">
			<ProjectBox
				v-for="(item, index) in projects"
				:key="index"
				:title="item.title"
				:description="item.description"
				:skills="item.skills"
				:additional_skills="item.additional_skills"
				:status="item.status"
				:github="item.github"
				:site="item.site"
				:images="item.images"
				@showErrorModal="$emit('showErrorModal')"
				@showImage="showLightbox(index)"
			/>
		</div>

		<LightBox :images="lightbox_images" :show="show_lightbox" @close="closeLightbox" />
	</div>
</template>

<script>
import ProjectBox from "./ProjectBox";
import LightBox from "./LightBox";

export default {
	components: {
		ProjectBox,
		LightBox,
	},
	data() {
		return {
			header: "qh4DW&2.",
			element_height: 0,
			element_visible: false,

			lightbox_images: [],
			projects: [
				{
					status: "Personal",
					title: "React x Tensorflow Practice",
					description:
						"implement tensorflow's Object Detection and Image Classification models.",
					skills: ["react", "tensorflow"],
					additional_skills: ["tensorflow", "typescript"],
					github: "https://github.com/ahtle/tensorflow-practice",
					site: "https://ahtle.github.io/tensorflow-practice",
					images: [
						{
							thumb: require("../../../assets/images/object-recognition.png"),
							src: require("../../../assets/images/object-recognition.png"),
							caption: "<h4>I am a person!</h4>",
						},
						{
							thumb: require("../../../assets/images/image-classification.png"),
							src: require("../../../assets/images/image-classification.png"),
							caption: "<h4>So that's what it is!</h4>",
						},
					],
				},
				{
					status: "Professional",
					title: "stanford COVID Vaccine tracker",
					description:
						"track the development of vaccines and theraputics for COVID-19. Uses clinicaltrials.org, pubmed, and drugbank.ca.",
					skills: ["vuejs", "laravel", "database"],
					site: "https://racetoacure.stanford.edu/",
					images: [
						{
							thumb: require("../../../assets/images/racetoacure-1.png"),
							src: require("../../../assets/images/racetoacure-1.png"),
							caption: "<h4>Overview</h4>",
						},
						{
							thumb: require("../../../assets/images/racetoacure-2.png"),
							src: require("../../../assets/images/racetoacure-2.png"),
							caption: "<h4>Categorized data</h4>",
						},
					],
				},
				{
					status: "Freelance",
					title: "abrahamverghese.org",
					description:
						"wordpress site for a best-selling author. Uses CDN and caching to optimize speed. SEO with plugin and Google Search Console.",
					skills: ["wordpress"],
					github: "",
					site: "https://abrahamverghese.org",
					images: [
						{
							thumb: require("../../../assets/images/av-site.png"),
							src: require("../../../assets/images/av-site.png"),
							caption: "<h4>buy his books!</h4>",
						},
					],
				},
				{
					status: "Personal",
					title: "Zoom Family Feud",
					description:
						"only version of the game family feud. Practice for Next.js, React Hooks, and Typescript.",
					skills: ["react"],
					additional_skills: ["nextjs", "typescript"],
					github: "https://github.com/ahtle/zoom-family-feud",
					site: "https://zoom-family-feud.vercel.app/",
					images: [
						{
							thumb: require("../../../assets/images/zoom-family-feud.png"),
							src: require("../../../assets/images/zoom-family-feud.png"),
							caption: "<h4>Survey says!</h4>",
						},
					],
				},
				{
					status: "Professional",
					title: "t32 grant application",
					description:
						"tool to facilitate grant applications. Aggregate work and pulication of mentors and mentees to produce documents for NIH grants.",
					site: "",
					skills: ["vuejs", "laravel", "database"],
					github: "https://github.com/ahtle/t32grant-docs",
					images: [
						{
							thumb: require("../../../assets/images/t32grant-01.png"),
							src: require("../../../assets/images/t32grant-01.png"),
							caption: "<h4>UI follow NIH submission requirements</h4>",
						},
						{
							thumb: require("../../../assets/images/t32grant-02.png"),
							src: require("../../../assets/images/t32grant-02.png"),
							caption: "<h4>pull publication data from pubmed</h4>",
						},
					],
				},
				{
					status: "Professional",
					title: "stanford hiring portal",
					description:
						"public faculty hiring site. internal applicant management/interview/status system",
					site: "https://facultyapplication.stanford.edu",
					github: "https://github.com/ahtle/domleanfa-docs/blob/main/README.md",
					skills: ["vuejs", "laravel", "database"],
					images: [
						{
							thumb: require("../../../assets/images/domleanfa.png"),
							src: require("../../../assets/images/domleanfa.png"),
							caption: "<h4>Public facing portal</h4>",
						},
					],
				},
				{
					status: "Professional",
					title: "stanford department of medicine site",
					description: `Provide support and maintance for the largest department within the school of medicine. Also train new user in using the CMS; this site uses Adobe Experience Manager.`,
					site: "https://medicine.stanford.edu/",
					additional_skills: ["aem"],
					images: [
						{
							thumb: require("../../../assets/images/dom.png"),
							src: require("../../../assets/images/dom.png"),
							caption: "<h4>Homepage</h4>",
						},
					],
				},
				{
					status: "Personal",
					title: "founding speeches [not maintaining]",
					description:
						"Easily browse and view transcript of famous speeches. Use Watson Personality Insight to analyze the transcript based on: Big Five personality, Needs, and Values.",
					skills: ["react", "database"],
					github: "https://github.com/ahtle/founding-speeches",
					site: "https://founding-speeches.herokuapp.com/",
					images: [
						{
							thumb:
								"https://github.com/ahtle/founding-speeches/raw/master/public/img/watson-screenshot.png",
							src:
								"https://github.com/ahtle/founding-speeches/raw/master/public/img/watson-screenshot.png",
							caption: "<h4>IBM Watson analysis</h4>",
						},
						{
							thumb:
								"https://github.com/ahtle/founding-speeches/raw/master/public/img/screenshot.jpg",
							src:
								"https://github.com/ahtle/founding-speeches/raw/master/public/img/screenshot.jpg",
							caption: "<h4>Dashboard</h4>",
						},
					],
				},
				{
					status: "Professional",
					title: "Medical Calculators",
					description:
						"The calculators presented in these pages are created for healthcare providers who are familiar with the diagnosis and treatment of patients with liver disease.",
					skills: ["vuejs"],
					site: "https://medcalculators.stanford.edu/meld",
					images: [
						{
							thumb: require("../../../assets/images/medcalculator.png"),
							src: require("../../../assets/images/medcalculator.png"),
							caption: "<h4>Med calculator</h4>",
						},
					],
				},
			],

			projectImageIndex: null,
			show_lightbox: false,
		};
	},
	watch: {
		element_height(val) {
			if (val <= 800) {
				this.element_visible = true;
			}
		},
		element_visible(val) {
			if (val) {
				// header
				this.decodeHeader();
			}
		},
		projectImageIndex(val) {
			if (val !== null) {
				this.lightbox_images = this.projects[val].images;
			} else {
				this.lightbox_images = [];
			}
		},
	},
	methods: {
		handleScroll() {
			let element = document.getElementById("SectionFour");
			let rect = element.getBoundingClientRect();
			this.element_height = rect.top;
		},
		decodeHeader() {
			this.header = "C$@SDV?Y";
			setTimeout(() => {
				this.header = "P%OBSC)@";
			}, 100);
			setTimeout(() => {
				this.header = "PR/`XA5$";
			}, 200);
			setTimeout(() => {
				this.header = "PRO7-B<Q";
			}, 300);
			setTimeout(() => {
				this.header = "PROJ:K$=";
			}, 400);
			setTimeout(() => {
				this.header = "PROJE]WP";
			}, 500);
			setTimeout(() => {
				this.header = "PROJEC|U";
			}, 600);
			setTimeout(() => {
				this.header = "PROJECTH";
			}, 700);
			setTimeout(() => {
				this.header = "PROJECTS";
			}, 700);
		},
		showLightbox(index) {
			this.projectImageIndex = index;
			this.show_lightbox = true;
		},
		closeLightbox() {
			this.show_lightbox = false;
			this.projectImageIndex = null;
		},
	},
	created() {
		window.addEventListener("scroll", this.handleScroll);
	},
	destroyed() {
		window.removeEventListener("scroll", this.handleScroll);
	},
};
</script>

<style lang="sass" scoped>
#SectionSix
  background: linear-gradient(180deg,#1a1514,#413561);
  .project-container
      margin: 0 100px;
      @media screen and (max-width: 575px)
          margin: 0;
</style>
