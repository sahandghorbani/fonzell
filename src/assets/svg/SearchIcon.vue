<template>
  <div class="container">
    <form class="search" @submit.prevent="searchHandler">
      <input
        v-model="query"
        class="search__input"
        type="search"
        placeholder="Search"
        id="searchInput"
      />

      <div class="search__icon-container">
        <label for="searchInput" class="search__label" aria-label="Search">
          <svg viewBox="0 0 1000 1000" title="Search">
            <path
              fill="currentColor"
              d="M408 745a337 337 0 1 0 0-674 337 337 0 0 0 0 674zm239-19a396 396 0 0 1-239 80 398 398 0 1 1 319-159l247 248a56 56 0 0 1 0 79 56 56 0 0 1-79 0L647 726z"
            />
          </svg>
        </label>

        <button class="search__submit" aria-label="Search">
          <svg viewBox="0 0 1000 1000" title="Search">
            <path
              fill="currentColor"
              d="M408 745a337 337 0 1 0 0-674 337 337 0 0 0 0 674zm239-19a396 396 0 0 1-239 80 398 398 0 1 1 319-159l247 248a56 56 0 0 1 0 79 56 56 0 0 1-79 0L647 726z"
            />
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let query = ref("");
    let searchHandler = () => {
      console.log(query.value);
    };
    return { query, searchHandler };
  },
};
</script>

<style scoped lang="scss">
svg {
  width: 3.2rem;
  height: 3.2rem;
  color: red;
}

:root {
  --color-background: #222;
  --color-foreground: #ddd;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  font-weight: 100;
}

.container {
  align-items: center;
  // background: var(--color-background);
  display: flex;
  margin-top: 1.4rem;
  justify-content: center;
}

.search {
  --easing: cubic-bezier(0.4, 0, 0.2, 1);
  --font-size: 2rem;
  --color: var(--color-foreground);
  --color-highlight: #ff0000;
  --transition-time-icon: 0.5s;
  --transition-time-input: 0.5s 0.2s;

  &:not(:focus-within) {
    --transition-time-input: 0.2s 0s;
  }

  @media (prefers-reduced-motion: reduce) {
    --transition-time-icon: 0s !important;
    --transition-time-input: 0s !important;
  }

  $root: &;

  border-radius: 999px;
  border: 2px solid transparent;
  display: flex;
  transition: border-color var(--transition-time-icon) linear,
    padding var(--transition-time-input) var(--easing);

  &__input {
    background: transparent;
    border: none;
    color: var(--color-highlight);
    font-size: var(--font-size);
    opacity: 0;
    outline: none;
    padding: 0;
    transition: width var(--transition-time-input) var(--easing),
      padding var(--transition-time-input) var(--easing),
      opacity var(--transition-time-input) linear;
    width: 0;

    &::placeholder {
      color: var(--color);
      opacity: 0.75;
    }
  }

  &__icon-container {
    height: calc(var(--font-size) + 2rem);
    position: relative;
    width: calc(var(--font-size) + 2rem);
  }

  &__label,
  &__submit {
    color: var(--color);
    cursor: pointer;
    display: block;
    height: 100%;
    padding: 0;
    position: absolute;
    width: 100%;

    &:hover,
    &:focus,
    &:active {
      color: var(--color-highlight);
    }
  }

  &__label {
    transition: transform var(--transition-time-icon) var(--easing), color 0.1s;
  }

  &__submit {
    background: none;
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 0 4px inset transparent;
    display: none;
    outline: none;
    transition: color 0.1s, box-shadow 0.1s;

    svg {
      transform: scale(0.5);
    }

    &:focus {
      box-shadow: 0 0 0 4px inset var(--color-highlight);
    }
  }

  &:focus-within {
    border-color: var(--color);

    #{$root} {
      &__input {
        border-radius: 20px;
        opacity: 1;
        padding: 0 1rem 0 2rem;
        width: calc(var(--font-size) * 12);
      }

      &__label {
        transform: scale(0.5);
      }

      &__submit {
        animation: unhide var(--transition-time-icon) steps(1, end);
        display: block;
      }
    }
  }
}

@keyframes unhide {
  from {
    height: 0;
    opacity: 0;
  }

  to {
    height: auto;
    opacity: 1;
  }
}

/*  */
</style>
