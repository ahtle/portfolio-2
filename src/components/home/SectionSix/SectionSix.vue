<template>
  <div id="SectionSix" class="section-container">
    <h3 class="section-header" style="margin-bottom:20px;">{{header}}</h3>
    <p style="margin-bottom:64px;">Professional and personal Projects</p>

    <div class="project-container flex h-center">
      <ProjectBox v-for="(item, index) in projects" :key="index" 
        :title="item.title"
        :description="item.description"
        :skills="item.skills"
        :status="item.status"
        :file="item.file"
        :site="item.site"
        :images="item.images"
        @showErrorModal="$emit('showErrorModal')"
        @showImage="handlehowLightbox(index)"
      />
    </div>

    <LightBox :images="projects[projectImageIndex].images" :show="show_lightbox" @close="handleCloseLightbox"/>
  
  </div>
</template>

<script>
import ProjectBox from './ProjectBox';
import LightBox from './LightBox';

export default {
  components: {
    ProjectBox, LightBox,
  },
  data() {
    return {
      header: 'qh4DW&2.',
      element_height: 0,
      element_visible: false,

      projects: [
        {
          status: 'Professional',
          title: 'stanford hiring portal',
          description: 'public faculty hiring site. internal applicant management/interview/status system',
          skills: ['vuejs', 'laravel', 'database'],
          images: [
            {
              thumb: require('../../../assets/images/fight.png'),
              src: require('../../../assets/images/fight.png'),
              caption: '<h4>Fight!</h4>',
            },
            {
              thumb: 'https://i-kinhdoanh.vnecdn.net/2018/06/18/1-1529296929_680x0.jpg',
              src: 'https://i-kinhdoanh.vnecdn.net/2018/06/18/1-1529296929_680x0.jpg',
              caption: '<h4>Messi</h4>',
            },
          ]
        },
        {
          status: 'Personal',
          title: 'founding speeches',
          description: 'Easily browse and view transcript of famous speeches. Use Watson Personality Insight to analyze the transcript based on: Big Five personality, Needs, and Values',
          skills: ['react', 'database'],
          file: 'https://github.com/anhhtle/founding-speeches',
          site: 'https://founding-speeches.herokuapp.com/',
          images: [
            {
              thumb: 'https://dummyimage.com/1280/000000/ffffff',
              src: 'https://dummyimage.com/1280/000000/ffffff',
              caption: '<h4>Fight!</h4>',
            },
            {
              thumb: 'https://dummyimage.com/400/000000/ffffff',
              src: 'https://dummyimage.com/400/000000/ffffff',
              caption: '<h4>Messi</h4>',
            },
          ]
        },
        {
          status: 'Personal',
          title: 'FRIEND ALERT',
          description: 'SIGN-UP YOUR FRIENDS AS EMERGENCY CONTACTS. SET AN ALARM. YOUR CONTACTS WILL BE NOTIFIED WHEN THE TIMER EXPIRES.',
          skills: ['js' ,'node-js', 'database'],
          file: 'https://github.com/anhhtle/Friend-Alert',
          site: 'https://friend-alert.herokuapp.com/',
        },
        {
          status: 'Personal',
          title: 'FRIEND ALERT',
          description: 'SIGN-UP YOUR FRIENDS AS EMERGENCY CONTACTS. SET AN ALARM. YOUR CONTACTS WILL BE NOTIFIED WHEN THE TIMER EXPIRES.',
          skills: ['js' ,'node-js', 'database'],
          file: 'https://github.com/anhhtle/Friend-Alert',
          site: 'https://friend-alert.herokuapp.com/',
        },
        {
          status: 'Personal',
          title: 'FRIEND ALERT',
          description: 'SIGN-UP YOUR FRIENDS AS EMERGENCY CONTACTS. SET AN ALARM. YOUR CONTACTS WILL BE NOTIFIED WHEN THE TIMER EXPIRES.',
          skills: ['js' ,'node-js', 'database'],
          file: 'https://github.com/anhhtle/Friend-Alert',
          site: 'https://friend-alert.herokuapp.com/',
        },
      ],

      projectImageIndex: 0,
      show_lightbox: false
    }
  },
  watch: {
    element_height (val) {

      if (val <= 800) {
        this.element_visible = true;
      }
    },
    element_visible (val) {
      if (val) {
        // header
        this.decodeHeader();
      }
    },
  },
  methods: {
    handlehowLightbox(index) {
      this.projectImageIndex = index;
      this.show_lightbox = true;
    },
    handleCloseLightbox() {
      this.show_lightbox = false;
    },
    handleScroll() {
      let element =  document.getElementById('SectionFour');
      let rect = element.getBoundingClientRect();
      this.element_height = rect.top;
    },
    decodeHeader() {
      this.header = 'C$@SDV?Y';
      setTimeout(() => {
        this.header = 'P%OBSC)@';
      }, 100);
      setTimeout(() => {
        this.header = 'PR/`XA5$';
      }, 200);
      setTimeout(() => {
        this.header = 'PRO7-B<Q';
      }, 300);
      setTimeout(() => {
        this.header = 'PROJ:K$=';
      }, 400);
      setTimeout(() => {
        this.header = 'PROJE]WP';
      }, 500);
      setTimeout(() => {
        this.header = 'PROJEC|U';
      }, 600);
      setTimeout(() => {
        this.header = 'PROJECTH';
      }, 700);
      setTimeout(() => {
        this.header = 'PROJECTS';
      }, 700);
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="sass" scoped>
  #SectionSix
    background: linear-gradient(180deg,#1a1514,#413561);
    .project-container
      margin: 0 100px;
</style>