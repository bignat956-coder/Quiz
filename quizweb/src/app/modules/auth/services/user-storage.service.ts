import { Injectable } from '@angular/core';

const USER = "q_user";

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  // NO saveToken() function. We are deliberately removing it.
  // It was a broken placeholder from the start.

  constructor() { }

  static saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  // This is the SAFE version of getUser().
  // It handles being logged out (user === null) without crashing.
  static getUser(): any {
    const user = localStorage.getItem(USER);

    if (user === null) {
      return null;
    }

    return JSON.parse(user);
  }

  static getUserId(): string {
    const user = this.getUser();
    if (user === null) { return ''; }
    return user.id;
  }

  static getUserRole(): string {
    const user = this.getUser();
    if (user === null) { return ''; }
    return user.role;
  }

  // This is the correct, simple logic for your app.
  static isAdminLoggedIn(): boolean {
    const role: string = this.getUserRole();
    return role === 'ADMIN';
  }

  // This is the correct, simple logic for your app.
  static isUserLoggedIn(): boolean {
    const role: string = this.getUserRole();
    return role === 'USER';
  }

  static signOut(): void {
    window.localStorage.removeItem(USER);
  }
}
