<template>
<div :id="groupId + '-' + item.id" class="accordion-item" :class="{'is-active': item.active}">
  <dt class="accordion-item-title">
    <h3 class="Base-h3 u-marginBottom--1">{{item.title}}</h3>
    <ul class="Base-ul">
      <li><strong>Ausbildungsbeginn:</strong> {{item.start}}</li>
      <li><strong>Ausbildungsdauer:</strong> {{item.time}}</li>
      <li><strong>Voraussetzungen:</strong> {{item.skills}}</li>
    </ul>
    <button @click="toggle" class="accordion-item-trigger">
      <p class="accordion-item-title-text">Mehr erfahren</p>
      <span class="accordion-item-trigger-icon"></span>
    </button>
  </dt>
  <transition name="accordion-item"
    @enter="startTransition"
    @after-enter="endTransition"
    @before-leave="startTransition"
    @after-leave="endTransition">
    <dd v-if="item.active" class="accordion-item-details">
      <div v-html="item.details" class="accordion-item-details-inner"></div>
    </dd>
  </transition>
</div>
</template>
<script>

export default {
  name: 'Accordion-item',
  props: ['item', 'multiple', 'groupId'],
  methods: {
  toggle(event) {
    if (this.multiple) this.item.active = !this.item.active
    else {
      this.$parent.$children.forEach((item, index) => {
        if (item.$el.id === event.currentTarget.parentElement.parentElement.id) item.item.active = !item.item.active
        else item.item.active = false
      })
    }
  },
  startTransition(el) {
    el.style.height = el.scrollHeight + 'px'
  },

  endTransition(el) {
    el.style.height = ''
  }
  },
}
</script>

