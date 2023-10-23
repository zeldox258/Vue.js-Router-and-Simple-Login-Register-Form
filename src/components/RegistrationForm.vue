import Vue from 'vue';

export default {
  <template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register" class="register-form">
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" required>
        </div>
        <div>
          <label for="surname">Surname:</label>
          <input type="text" v-model="surname" required>
        </div>
        <div>
          <label for="phoneNumber">Phone Number:</label>
          <input type="text" v-model="phoneNumber" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required>
        </div>
        <div>
          <label for="userType">User Type:</label>
          <input type="text" v-model="userType" required>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        name: '',
        surname: '',
        phoneNumber: '',
        password: '',
        userType: ''
      };
    },
    methods: {
      async register() {
        // Make a POST request
        try {
          const response = await fetch('http://localhost:3010/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: this.name,
              surname: this.surname,
              phoneNumber: this.phoneNumber,
              password: this.password,
              userType: this.userType
            })
          });

          const data = await response.json();

          if (response.ok) {
            alert('Registration successful');
          } else {
            alert(data.message || 'Registration failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
  };
  </script>

  <style scoped>
  .register-form {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .register-form label {
    font-weight: bold;
  }
  
  .register-form input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .register-form button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .register-form button:hover {
    background-color: #0056b3;
  }
  </style>

}