<?php
    class User {
        private $username;
        private $email;
        private $hashedPassword;
        private $profilepic;
        private $description;
    
        /**
         * @param $username       User felhasználóneve.
         * @param $email          User email címe.
         * @param $hashedPassword User titkosított jelszava.
         */
        public function __construct($username, $email, $hashedPassword, $profilepic, $description)
        {
            $this->username = $username;
            $this->email = $email;
            $this->hashedPassword = $hashedPassword;
            $this->profilepic = $profilepic;
            $this->description = $description;
        }
    
        /**
         * @return mixed A felhasználó felhasználónevét.
         */
        public function getUsername()
        {
            return $this->username;
        }
    
        /**
         * @param mixed $username A felhasználó felhasználóneve.
         */
        public function setUsername($username): void
        {
            $this->username = $username;
        }
    
        /**
         * @return mixed A felhasználó email címét.
         */
        public function getEmail()
        {
            return $this->email;
        }
    
        /**
         * @param mixed $email A felhasználó email címe.
         */
        public function setEmail($email): void
        {
            $this->email = $email;
        }
    
        /**
         * @return mixed A felhasználó titkosított jelszavát.
         */
        public function getHashedPassword()
        {
            return $this->hashedPassword;
        }
        
        public function getProfilepic()
        {
            return $this->profilepic;
        }

        public function setProfilepic($profilepic): void
        {
            $this->profilepic = $profilepic;
        }
        public function getDescription()
        {
            return $this->description;
        }

        public function setDescription($description): void
        {
            $this->description = $description;
        }
    }
?>