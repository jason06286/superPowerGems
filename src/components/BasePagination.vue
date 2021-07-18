<script>
export default {
  props: {
    pagination: {
      type: Object,
      default: () => ({}),
    },
    getProducts: {
      type: Function,
      default: () => {},
    },
  },
  emits: ['getNowpage'],
  setup(props, { emit }) {
    return { props, emit };
  },
};
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li
        class="page-item"
        :class="{ disabled: !props.pagination.obj.has_pre }"
      >
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="
            emit('getNowpage', props.pagination.obj.current_page - 1)
          "
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{ active: page === props.pagination.obj.current_page }"
        v-for="page in props.pagination.obj.total_pages"
        :key="page"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="emit('getNowpage', page)"
          >{{ page }}</a
        >
      </li>
      <li
        class="page-item"
        :class="{ disabled: !props.pagination.obj.has_next }"
      >
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="
            emit('getNowpage', props.pagination.obj.current_page + 1)
          "
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav a.active {
  background-color: #dd5c33 !important;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #dd5c33;
  border-color: #dd5c33;
}
</style>
