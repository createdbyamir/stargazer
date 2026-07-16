[1mdiff --git a/src/Loading.jsx b/src/Loading.jsx[m
[1mnew file mode 100644[m
[1mindex 0000000..3717757[m
[1m--- /dev/null[m
[1m+++ b/src/Loading.jsx[m
[36m@@ -0,0 +1,16 @@[m
[32m+[m[32mimport { Atom } from 'react-loading-indicators';[m
[32m+[m
[32m+[m[32mexport default function LoadingAtom() {[m
[32m+[m[32m    return ([m
[32m+[m[32m        <>[m
[32m+[m[32m            <div className="flex items-center justify-center h-screen">[m
[32m+[m[32m                <Atom[m[41m [m
[32m+[m[32m                    color="#2f5d2f"[m[41m [m
[32m+[m[32m                    size="medium"[m[41m [m
[32m+[m[32m                    text="Loading Stargazer"[m[41m [m
[32m+[m
[32m+[m[32m                />[m
[32m+[m[32m            </div>[m
[32m+[m[32m        </>[m
[32m+[m[32m    )[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/src/Nasa.jsx b/src/Nasa.jsx[m
[1mindex 535fed2..fbf46cf 100644[m
[1m--- a/src/Nasa.jsx[m
[1m+++ b/src/Nasa.jsx[m
[36m@@ -1,6 +1,7 @@[m
 // 1. Import *useState* and *useEffect*[m
 import React, {useState, useEffect} from 'react';[m
 import NasaModal from './NasaModal';[m
[32m+[m[32mimport LoadingAtom from './Loading';[m
 [m
 export default function Nasa() {[m
     // 2. Create our apod variable as well as the setApod function via useState[m
[36m@@ -25,7 +26,7 @@[m [mexport default function Nasa() {[m
     return ([m
         <>[m
             {loading ? ([m
[31m-                <p>Loading...</p>[m
[32m+[m[32m                <p><LoadingAtom /></p>[m
             ) : ([m
                 <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">[m
                     {apod.map(item => {[m
