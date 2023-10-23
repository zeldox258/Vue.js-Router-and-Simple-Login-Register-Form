import Vue from 'vue';

export default {

  <template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login" class="login-form">
        <div>
          <label for="phoneNumber">Phone Number:</label>
          <input type="text" v-model="phoneNumber" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        phoneNumber: '',
        password: ''
      };
    },
    methods: {
      async login() {
        // Make a POST request
        try {
          const response = await fetch('http://localhost:3010/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              phoneNumber: this.phoneNumber,
              password: this.password
            })
          });

          const data = await response.json();

          if (response.ok) {
            alert('Login successful');
          } else {
            alert(data.message || 'Login failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
  };
  </script>

  <style scoped>
  .login-form {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .login-form label {
    font-weight: bold;
  }
  
  .login-form input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .login-form button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .login-form button:hover {
    background-color: #0056b3;
  }
  </style>
}