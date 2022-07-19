import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-base-200  p-10">
      <div class="footer text-base-content">
        <div>
          <span class="footer-title">Services</span>
          <p class="link link-hover">Branding</p>
          <p class="link link-hover">Design</p>
          <p class="link link-hover">Marketing</p>
          <p class="link link-hover">Advertisement</p>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <p class="link link-hover">About us</p>
          <p class="link link-hover">Contact</p>
          <p class="link link-hover">Jobs</p>
          <p class="link link-hover">Press kit</p>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <p class="link link-hover">Terms of use</p>
          <p class="link link-hover">Privacy policy</p>
          <p class="link link-hover">Cookie policy</p>
        </div>
        <div>
          <span class="footer-title">Newsletter</span>
          <div class="form-control w-80">
            <label class="label">
              <span class="label-text">Enter your email address</span>
            </label>
            <div class="relative">
              <input
                type="text"
                placeholder="username@site.com"
                class="input input-bordered w-full pr-16"
              />
              <button class="btn btn-primary absolute top-0 right-0 rounded-l-none text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">copyright &copy; best Tools Parts BD {year}</p>
    </footer>
  );
};

export default Footer;
