# git-bisect-demo

# How to run?

1. Run `yarn` to install dependencies

```
➜ yarn
```

2. Once it's finished run:

```
➜ yarn start
```

And that't is! A new tab should open in your browser:

![image](https://user-images.githubusercontent.com/7410981/121582125-7d302b00-c9e3-11eb-87e1-963ecd04cd2e.png)


# git-bisect

Notice how the `-` button is not actually substracting a number from the counter. Lets check what change introduced this bug in the commit history.

Let's go to commit `7d13bd6` and see if the counter was broken there:

```
➜   git-bisect-demo git:(main) git checkout 7d13bd6
```

It works! So we just detected a commit where things were working ok. So since we know that the latest commit is bad `7d762ef` we can now start using `git bisect`.

```
➜  git-bisect-demo git:(main) git bisect start
➜  git-bisect-demo git:(main) git bisect bad 7d762ef
➜  git-bisect-demo git:(main) git bisect good 7d13bd6
```

Now we should be in a previous commit, let's verify if things are working as expected, depending on the results we would need to mark this step `good` or `bad`

```
➜  git-bisect-demo git:(main) git bisect good
```

or 

```
➜  git-bisect-demo git:(main) git bisect bad
```

let's continue this proccess until we reach the end and find the culprit:

```
➜  git-bisect-demo git:(5af3288) git bisect good
be8633f1681ad9d54c27ef8497099f1dff1f4e8d is the first bad commit
commit be8633f1681ad9d54c27ef8497099f1dff1f4e8d
Author: ccontreras <ccontreras@forhims.com>
Date:   Wed Jun 9 20:02:39 2021 -0700

    Version 0.0.56

 src/App.tsx | 4 ++--
 1 file changed, 2 insertions(+), 2 deletions(-)
```

and that's it! If we go to the commit history and check commit `be8633f1681ad9d54c27ef8497099f1dff1f4e8d` we know what exactly changes and introduced our bug 🥳

```
➜  git-bisect-demo git:(5e77a61) git bisect bad
Bisecting: 13 revisions left to test after this (roughly 4 steps)
[8ad05affb532737baa5c173bb3cc300b9cdd873e] Version 0.0.60
diff --git a/src/App.tsx b/src/App.tsx
index 04ae111..3e580b3 100644
--- a/src/App.tsx
+++ b/src/App.tsx
@@ -20,13 +20,13 @@ export default function App() {
         <p className="font-mono px-6 w-15"> {count}</p>
         <Button
           onClick={() =>
-            setCount((prevState) => prevState + 1)
+            setCount((prevState) => prevState - 1)
           }
           label={'-'}
         />
       </div>
       <div className="absolute bottom-0">
-        Version 0.0.56
+        Version 0.0.55
       </div>
     </div>
   );
```

