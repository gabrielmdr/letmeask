import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { firebase } from "../services/firebase";

type User = {
  avatar: string
  id: string
  name: string
}

type AuthContextType = {
  user: User | undefined
  signInWithGoogle: () => Promise<void>
}

type Props = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: Props) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user;
  
        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google account.");
        }
  
        setUser({
          avatar: photoURL,
          id: uid,
          name: displayName
        });
      }
    })

    return () => {
      unsubscribe();
    }
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);
    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google account.");
      }

      setUser({
        avatar: photoURL,
        id: uid,
        name: displayName
      });
    }
  }
  
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}